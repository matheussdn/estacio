package com.example.listdetarefas.presentation

import android.content.Intent
import android.os.Bundle
import android.provider.Settings
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.wear.compose.material.*
import androidx.wear.tooling.preview.devices.WearDevices
import com.example.listdetarefas.AudioHelper
import com.example.listdetarefas.presentation.theme.ListDeTarefasTheme

class MainActivity : ComponentActivity() {

    private lateinit var audioHelper: AudioHelper

    override fun onCreate(savedInstanceState: Bundle?) {
        installSplashScreen()
        super.onCreate(savedInstanceState)

        audioHelper = AudioHelper(this)

        setContent {
            val audioState = rememberAudioState(audioHelper)

            WearApp(
                hasSpeaker = audioState.hasSpeaker,
                hasBluetooth = audioState.hasBluetooth,
                onOpenBluetoothSettings = {
                    startActivity(
                        Intent(Settings.ACTION_BLUETOOTH_SETTINGS)
                    )
                }
            )
        }
    }
}

@Composable
fun WearApp(
    hasSpeaker: Boolean,
    hasBluetooth: Boolean,
    onOpenBluetoothSettings: () -> Unit
) {
    ListDeTarefasTheme {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(MaterialTheme.colors.background),
            contentAlignment = Alignment.Center
        ) {
            TimeText()
            MainScreen(
                hasSpeaker = hasSpeaker,
                hasBluetooth = hasBluetooth,
                onOpenBluetoothSettings = onOpenBluetoothSettings
            )
        }
    }
}



@Preview(device = WearDevices.SMALL_ROUND, showSystemUi = true)
@Composable
fun DefaultPreview() {
    WearApp(
        hasSpeaker = true,
        hasBluetooth = false,
        onOpenBluetoothSettings = {}
    )
}