# Descripción
---
## La misión

¡Bienvenido a tu primera actividad de AI Agent en Cisco Connect Latam!

En este lab asumirás el rol de **Webex Contact Center Administrator** de **Cumulus Hospital**, una institución privada multinacional de salud con dos ubicaciones en Estados Unidos y dos en México. Cumulus Hospital ofrece servicios de diagnóstico y diversas especialidades médicas.

Tu reto será crear una experiencia automatizada para los pacientes que llaman al hospital para consultar información, validar sus datos y gestionar sus citas.

Construirás dos AI Agents autónomos desde cero utilizando **AI Agent Studio**:

- **Concierge:** detectará si el paciente desea continuar la conversación en español o en inglés y transferirá la interacción utilizando la ruta correspondiente.
- **Cumulus:** funcionará como un asistente para responder preguntas sobre el hospital, consultar información del paciente y gestionar citas, aplicando reglas de autenticación, privacidad y seguridad.

También integrarás los AI Agents con un **Knowledge Base**, **MCP Server**, **Webex Connect** y un **Voice Flow** mediante el uso de nodos `VirtualAgentV2`.

Al finalizar, probarás la solución en `Preview` y realizarás una llamada real para validar la experiencia completa, incluyendo el envío de una confirmación por SMS.

## Estructura del lab

El lab está dividido en tres partes:

| Lab | Tema | Descripción |
|---|---|---|
| **Lab 1** | Concierge AI Agent | Crear y configurar un AI Agent autónomo que detecte el idioma del paciente y transfiera la interacción a la ruta correspondiente en español o inglés. |
| **Lab 2** | Cumulus AI Agent | Crear un AI Agent autónomo para responder preguntas sobre Cumulus Hospital, validar la identidad del paciente y gestionar citas utilizando un Knowledge Base, MCP Server y Webex Connect. |
| **Lab 3** | Integración con Voice Flow | Integrar los AI Agents con un Voice Flow mediante el uso de los nodos `VirtualAgentV2`, realizar una llamada real y validar la experiencia bilingüe y el envío de confirmaciones por SMS. |

## Objetivos de aprendizaje

Al finalizar este lab podrás:

1. Crear, configurar y publicar un AI Agent autónomo en `AI Agent Studio`.
2. Configurar una experiencia bilingüe para español e inglés.
3. Integrar un AI Agent con `MCP Server`, `Webex Connect` y un Voice Flow.
4. Utilizar un Knowledge Base y acciones del MCP Server como `get_patient` y `update_patient`.
5. Validar la identidad del paciente y gestionar citas respetando las reglas de privacidad.
6. Probar una llamada completa y confirmar el resultado mediante SMS.

---

!!! note "Idioma de las instrucciones"

    El lab está escrito principalmente en español. Sin embargo, por temas de simplicidad para el soporte por parte de los proctors, se mantienen en inglés los nombres de productos, menús, campos y configuraciones, para coincidir con la interfaz administrativa.

    Por ejemplo: `Control Hub`, `AI Agent`, `AI Agent Studio`, `guidelines`, `entity name`, `message`, `personaANI` y `VirtualAgentV2`.

    Si decide cambiar la interfaz administrativa a español, tenga en cuenta que los nombres de los campos y menús pueden ser diferentes.


!!! tip "Adaptación a otras industrias"

    Aunque este lab presenta un caso de uso del sector salud, las instrucciones y configuraciones pueden replicarse y adaptarse fácilmente a cualquier otra industria o vertical, como servicios financieros, retail, telecomunicaciones o educación.

---


> *¿Estás listo para construir el futuro de la atención al paciente? ¡Comencemos 
> a innovar y transformemos juntos la experiencia de salud digital* 🚀

---

*Lab realizado para Cisco Connect Latam 2026*