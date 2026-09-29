# Bonus Lab - AI Assistant: Asistencia al agente humano

---

## Agenda

| # | Actividad | Duración |
|---|---|---|
| Bonus | Crear una `Transferencia personalizada` para pasar `variables` del `AI Agent` al `flow` y así utilizar `AI Assistant` en el escritorio del agente con `Real-Time Assist` | 10 minutos |

---

## Objetivo

En escenarios reales, un AI Agent puede necesitar transferir la interacción a un agente humano cuando recibe una solicitud compleja o fuera de su alcance.

En este Bonus Lab habilitarás una `Transferencia personalizada` y utilizarás `AI Assistant` con `Real-Time Assist` para apoyar al agente humano durante una llamada.

---

## 1. Habilitar Transferencia Customizada

1. En `AI Agent Studio`, haga clic en la pestaña **Actions** de su AI Agent `PodXXX_ConnectLatam_Cumulus` y cree una nueva action que permita hacer una transferencia personalizada, para que  la llamada vaya de regreso al flow y enviar variables durante dicha transferencia.

Estas **variables** estarán disponibles para utilizarse en **Agent Desktop** cuando se realice el handover.

2. Haga clic en **+ Add actions**.

3. Haga clic en **Add new** y seleccione **Transfer**.

4. Configure los siguientes valores:

    - **Action name:** `Agent_Escalation`
    - **Transfer condition:** `To be used to transfer to a human agent.`
    - Habilite **Announce Transfer**.

    ???- tip "Cómo configurar la acción de Agent_Escalation"
        <figure markdown>
            ![Crear la acción Agent_Escalation](./assets/create_agent_escalation.gif){ loading=lazy style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" }
        </figure>

4. Haga clic en **Add new entity** y configure:

    - **Entity Name:** 
    ``` text
    Action
    ```
    - **Entity Type:** `String`
    - **Entity description:**

      ``` text
      Summary of the updated action regarding scheduling or cancelling an appointment according to the patient's request. Include it in the correct language. For example: "Reserva de Cita" or "Cancelación de Cita" in Spanish; "Scheduling Cancellation" or "Scheduling update" in English.
      ```

    - **Entity examples:**
        ``` text
        Reserva de Cita; Cancelación de Cita; Scheduling Cancellation; Update Scheduling; Actualización de Cita
        ```
    - Haga clic en **Add**

5. Haga clic en **Add** para terminar de configurar el **Action**.

6. Haga clic en **Add new entity** y configure:

    - **Entity Name:** 
    ``` text
    PersonaName
    ```
    - **Entity Type:** `String`
    - **Entity description:**
    ```text
    Use the value of {{PersonaName}} created in the Instructions.
    ```
    - Haga clic en **Add**.

7. Haga clic en **Add** para terminar de configurar el **Action**


    ???- tip "Video 29b – Actions Creation"
        <figure markdown>
            ![Configurar las entidades de transferencia](./assets/configure_agent_escalation_entities.gif){ loading=lazy style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" }
        </figure>

8. Haga clic en **Publish** y cree una nueva versión de este AI Agent.


## 2. Configurar Chrome en español

Para que `Agent Desktop` muestre correctamente la interfaz en español, abre una nueva ventana de Chrome utilizando el perfil correspondiente al agente.

1. Abre una nueva ventana de Chrome con el perfil `Agent`.
2. Haz clic en el menú de tres puntos ubicado en la esquina superior derecha.
3. Selecciona **Settings**.
4. En el buscador de configuración, escribe:

    ```text
    Language
    ```

5. Ubica **Spanish** en la lista de idiomas.
6. Si Spanish no aparece como idioma principal, haz clic en los tres puntos junto a Spanish.
7. Selecciona **Move to the top**.

???- tip "Configurar Chrome en español"
    <figure markdown>
        ![Configurar Chrome en español](./assets/configure_chrome_spanish.gif){ loading=lazy style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" }
    </figure>

## 3. Iniciar sesión en Agent Desktop

1. Desde Chrome, abre [Agent Desktop](https://desktop.wxcc-us1.cisco.com/).
2. Inicia sesión utilizando las credenciales de `Agent` asignadas a tu Pod.

    ???- tip "Iniciar sesión en Agent Desktop"
        <figure markdown>
            ![Iniciar sesión en Agent Desktop](./assets/agent_desktop_login.gif){ loading=lazy style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" }
        </figure>

3. Mantén la configuración predeterminada en la ventana de inicio de sesión.
4. Haz clic en **Guardar y continuar**.
5. Si el sistema solicita permiso para utilizar el sonido, habilítalo.

## 4. Poner el agente en estado Available

1. En `Agent Desktop`, verifica que el usuario esté conectado correctamente.
2. Cambia el estado del agente a:`Available`

    El agente debe estar disponible para recibir la llamada transferida por el `Cumulus AI Agent`.

???- tip "Poner el agente en estado Available"
    <figure markdown>
        ![Poner el agente en estado Available](./assets/agent_desktop_available.gif){ loading=lazy style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" }
    </figure>

## 5. Realizar la llamada y solicitar transferencia

1. Realiza una llamada al DID asignado a tu Pod utilizando tu teléfono celular.
2. También puedes utilizar la `Webex App` con el usuario asignado a tu Pod.
3. Selecciona el idioma solicitado por el Voice Flow.
4. Interactúa con el `Cumulus AI Agent`.
5. Utiliza uno de los escenarios practicados anteriormente, por ejemplo:

    `Cancelar una cita` <br>
    `Cambiar una cita` <br>
    `Consultar información sobre Cumulus Hospital` <br>
    `Solicitar hablar con un agente humano` <br>

6. Durante la conversación, solicita explícitamente la transferencia a un agente humano.

    Ejemplo: `Quiero hablar con un agente humano.`

    El **Cumulus AI Agent** debe ejecutar **Agent handover** y transferir la llamada a la Queue configurada.

## 6. Utilizar AI Assistant

Cuando el agente humano reciba la llamada:

1. En `Agent Desktop`, abre **AI Assistant**.
2. Haz clic en **Get Suggestion**.
3. Permite que `Real-Time Assist` escuche la conversación entre el paciente y el agente.
4. Continúa la conversación con el paciente.

    Puedes preguntar, por ejemplo: `¿Cuáles son las ubicaciones de Cumulus Hospital?`

5. Observa las sugerencias que aparecen en `AI Assistant`.
6. Verifica que la respuesta sugerida esté basada en el Knowledge Base configurado para el caso de uso.

???- tip "Utilizar AI Assistant en Agent Desktop"
    <figure markdown>
        ![Utilizar AI Assistant en Agent Desktop](./assets/agent_desktop_ai_assistant.gif){ loading=lazy style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" }
    </figure>

!!! note "Real-Time Assist"
    `Real-Time Assist` utiliza el contexto de la conversación para proporcionar sugerencias al agente humano en tiempo real.
    Estas sugerencias pueden ayudar al agente a responder preguntas utilizando la información disponible en el Knowledge Base.

## 7 Resultado esperado

Al finalizar este Bonus Lab debes haber comprobado que:

- El `Cumulus AI Agent` puede transferir una llamada a un agente humano.
- La llamada llega correctamente al `Agent Desktop`.
- El agente puede utilizar `AI Assistant`.
- `Real-Time Assist` analiza la conversación en tiempo real.
- Las sugerencias se generan utilizando el Knowledge Base.
- El agente humano recibe apoyo contextual durante la interacción.

---

## 🏁 Bonus Completado — Felicitaciones! 🎉

Has habilitado **Agent handover**, transferido una llamada desde el AI Agent hacia un agente humano y utilizado **AI Assistant** con **Real-Time Assist**.

---

*Lab realizado para Cisco Connect Latam 2026*