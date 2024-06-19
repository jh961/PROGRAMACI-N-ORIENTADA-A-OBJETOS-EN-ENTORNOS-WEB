# -*- coding: utf-8 -*-
"""
Created on Wed Nov 17 06:12:55 2021

@author: JAIME DIAZ

https://www.tiktok.com/@linkfydev/video/7028507983323630854?_d=secCgwIARCbDRjEFSACKAESPgo8oMFPCT2OfmKW15DfbP3JhaRRq0u1EGirSx0ElPDVjBcpNPQxYA4RGVaW0l1sD22zCRLhC00ul77sGL12GgA%3D&language=es&preview_pb=0&sec_user_id=MS4wLjABAAAA9MR7fSLErbl95RBbpRzZS88ZU4HFFUmV6QfU2zeCXpp5t_eHyAUYMtCXz4guPEfZ&share_app_id=1233&share_item_id=7028507983323630854&share_link_id=17adf902-17bb-456d-9817-343f3be3e3ae&source=h5_m&timestamp=1636491335&u_code=dccc6510g6iam0&user_id=6827390235568456709&utm_campaign=client_share&utm_medium=android&utm_source=copy&_r=1
"""

import pyttsx3
engine = pyttsx3.init()

for voice in engine.getProperty('voices'):
    print(voice)