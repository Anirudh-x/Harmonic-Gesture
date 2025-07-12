import streamlit as st
import cv2
import numpy as np
import pygame
import time
from cvzone.HandTrackingModule import HandDetector

# Initialize pygame for sound playback
pygame.mixer.init()

# Load sounds for white keys
sounds = {
    'q': pygame.mixer.Sound("./AudioFiles/key18.mp3"),
    'w': pygame.mixer.Sound("./AudioFiles/key19.mp3"),
    'e': pygame.mixer.Sound("./AudioFiles/key20.mp3"),
    'r': pygame.mixer.Sound("./AudioFiles/key21.mp3"),
    't': pygame.mixer.Sound("./AudioFiles/key22.mp3"),
    'y': pygame.mixer.Sound("./AudioFiles/key23.mp3"),
    'u': pygame.mixer.Sound("./AudioFiles/key24.mp3"),
}

# Streamlit setup
st.set_page_config(layout="centered")
st.markdown(
    """
    <h1 style="text-align: center; font-size: 3em;">Virtual Piano</h1>
    """,
    unsafe_allow_html=True,
)

# Initialize the camera
camera = cv2.VideoCapture(0)
if not camera.isOpened():
    st.error("Error: Unable to access the camera. Please check your settings.")
    st.stop()

camera.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)
camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)
camera.set(cv2.CAP_PROP_FPS, 120)

# Initialize hand detector
detector = HandDetector(detectionCon=0.8)

# Define keys for the piano
white_keys = {
    'q': (50, 50), 'w': (200, 50), 'e': (350, 50),
    'r': (500, 50), 't': (650, 50), 'y': (800, 50), 'u': (950, 50),
}
black_keys = {
    '1': (125, 50), '2': (275, 50), '3': (425, 50),
    '4': (575, 50), '5': (725, 50), '6': (875, 50), '7': (1025, 50),
}

# Streamlit frame for live feed
stframe = st.image([])

# Keep track of pressed keys
pressed_keys = set()

# Function to play a sound
def play_sound(key):
    if key in sounds:
        sounds[key].play()

# Main loop
try:
    while True:
        # Capture frame
        ret, frame = camera.read()
        if not ret:
            st.error("Error: Failed to capture a frame from the camera.")
            break

        frame = cv2.flip(frame, 1)  # Flip for mirror view
        hands, img = detector.findHands(frame, draw=False)  # Detect hands without drawing them

        # Draw white keys
        for key, (x, y) in white_keys.items():
            cv2.rectangle(img, (x, y), (x + 100, y + 200), (255, 255, 255), cv2.FILLED)
            cv2.putText(img, key, (x + 30, y + 150), cv2.FONT_HERSHEY_PLAIN, 3, (0, 0, 0), 3)

        # Draw black keys
        for key, (x, y) in black_keys.items():
            cv2.rectangle(img, (x, y), (x + 60, y + 120), (0, 0, 0), cv2.FILLED)
            cv2.putText(img, key, (x + 15, y + 90), cv2.FONT_HERSHEY_PLAIN, 2, (255, 255, 255), 2)

        # Process hands
        if hands:
            for hand in hands:
                hand_x, hand_y = hand["lmList"][8][0], hand["lmList"][8][1]  # Index finger tip position
                for key, (x, y) in white_keys.items():
                    if x <= hand_x <= x + 100 and y <= hand_y <= y + 200:
                        if key not in pressed_keys:
                            play_sound(key)
                            pressed_keys.add(key)
                for key, (x, y) in black_keys.items():
                    if x <= hand_x <= x + 60 and y <= hand_y <= y + 120:
                        if key not in pressed_keys:
                            play_sound(key)
                            pressed_keys.add(key)

                # Clear pressed keys if hand moves away
                pressed_keys = {k for k in pressed_keys if any(
                    x <= hand["lmList"][8][0] <= x + 100 and y <= hand["lmList"][8][1] <= y + 200
                    for k, (x, y) in white_keys.items()
                )}

                # Draw hand landmarks
                for lm in hand["lmList"]:
                    cv2.circle(img, (lm[0], lm[1]), 5, (0, 255, 0), cv2.FILLED)

        # Display the frame in Streamlit
        stframe.image(img, channels="BGR", use_column_width=True)

except Exception as e:
    st.error(f"An error occurred: {e}")
finally:
    camera.release()
    cv2.destroyAllWindows()
