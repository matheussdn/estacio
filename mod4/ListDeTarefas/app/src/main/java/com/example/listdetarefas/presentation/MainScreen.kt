package com.example.listdetarefas.presentation

import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.wear.compose.material.Button
import androidx.wear.compose.material.MaterialTheme
import androidx.wear.compose.material.Text

@Composable
fun MainScreen(
    hasSpeaker: Boolean,
    hasBluetooth: Boolean,
    onOpenBluetoothSettings: () -> Unit
) {
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {

        Text(
            text = """
                Speaker: $hasSpeaker
                Bluetooth: $hasBluetooth
            """.trimIndent(),
            textAlign = TextAlign.Center,
            color = MaterialTheme.colors.primary
        )

        Spacer(modifier = Modifier.height(8.dp))

        Button(onClick = onOpenBluetoothSettings) {
            Text("Bluetooth")
        }
    }
}