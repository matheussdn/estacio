package com.example.listdetarefas.presentation

import android.media.AudioDeviceCallback
import android.media.AudioDeviceInfo
import android.media.AudioManager
import androidx.compose.runtime.*
import com.example.listdetarefas.AudioHelper

@Composable
fun rememberAudioState(audioHelper: AudioHelper): AudioState {

    val context = audioHelper.context
    val audioManager =
        context.getSystemService(AudioManager::class.java)

    var state by remember {
        mutableStateOf(
            AudioState(
                hasSpeaker = audioHelper.audioOutputAvailable(
                    AudioDeviceInfo.TYPE_BUILTIN_SPEAKER
                ),
                hasBluetooth = audioHelper.audioOutputAvailable(
                    AudioDeviceInfo.TYPE_BLUETOOTH_A2DP
                )
            )
        )
    }

    DisposableEffect(Unit) {

        val callback = object : AudioDeviceCallback() {

            override fun onAudioDevicesAdded(
                addedDevices: Array<out AudioDeviceInfo>
            ) {
                state = state.copy(
                    hasBluetooth = audioHelper.audioOutputAvailable(
                        AudioDeviceInfo.TYPE_BLUETOOTH_A2DP
                    )
                )
            }

            override fun onAudioDevicesRemoved(
                removedDevices: Array<out AudioDeviceInfo>
            ) {
                state = state.copy(
                    hasBluetooth = audioHelper.audioOutputAvailable(
                        AudioDeviceInfo.TYPE_BLUETOOTH_A2DP
                    )
                )
            }
        }

        audioManager.registerAudioDeviceCallback(callback, null)

        onDispose {
            audioManager.unregisterAudioDeviceCallback(callback)
        }
    }

    return state
}