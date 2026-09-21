# Antes de comenzar

Bienvenido al lab de **AI Agents para Webex Contact Center**.

Durante esta experiencia asumirás el rol de **Webex Contact Center Administrator** de Cumulus Hospital. Crearás y probarás una solución bilingüe basada en AI Agents autónomos para atender pacientes en español e inglés.

## 1. Aviso importante

Aunque el diseño y los ejemplos de configuración de este lab pueden utilizarse como referencia, para preguntas relacionadas con diseño o implementación consulte la documentación oficial en [help.webex.com](https://help.webex.com/).


## 2. Preparación del lab

### 2.1 Configuración perfiles de Chrome

Para evitar errores relacionados con sesiones, credenciales o información almacenada en el navegador, trabajará con un perfil dedicado de Chrome.


#### Perfiles a crear
| Nombre del Perfil | Rol |
|---|---|
| `Admin_Lab` | Administrador |
| `Supervisor_Lab` | Supervisor |
| `Agent_Lab` | Agente |

---

### Pasos

1. Abra **Google Chrome** y localice el icono de perfil en la esquina superior derecha.

???- note "Icono Perfil Chrome"
    <figure markdown>
      ![Chrome Profile](./assets/ChromeProfile_image.png){ loading=lazy style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" }
      <figcaption>Icono de perfil de Chrome esquina superior derecha</figcaption>
    </figure>

2. Seleccione el icono y haga clic en **Add Chrome Profile** y seleccione **Stay Signed out**.
3. Elija un color, escriba (ej.:`Admin_Lab`) como nombre del perfil y haga clic en **Done**.
4. Repita los **pasos 2 y 3** para crear los dos perfiles adicionales — `Supervisor_Lab` y `Agent_Lab`.

???- info "Mira cómo hacerlo"
    <figure markdown>
      ![Chrome Profile Setup](./assets/ChromeProfile.gif){ loading=lazy style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" }
      <figcaption>Configuración de los 3 perfiles de Chrome para el laboratorio</figcaption>
    </figure>

---
    
## 3 Acceso al lab

!!! warning "Disciplina del Pod — Lea antes de comenzar"

    Durante todos los labs trabajará en un **tenant compartido** con los demás participantes de esta sesión.

    Para mantener el ambiente estable para todos, siga estas reglas:

    - Reemplace siempre `XXX` por el `Pod ID` de tres dígitos que le fue asignado, por ejemplo: `001` o `002`.
    - La convención de nombres debe comenzar siempre con el prefijo `Pod`, seguido de su ID. Por ejemplo: `PodXXX`.
    - Utilice siempre el nombre exacto indicado en la guía del lab. No utilice nombres diferentes, no modifique el nombre sugerido ni agregue caracteres adicionales.
    - No modifique, elimine ni sobrescriba ningún recurso identificado como `ADMIN` o `DO NOT DELETE`. Estas son configuraciones compartidas que permiten el funcionamiento del lab.
    - Si no sigue exactamente esta convención, podría sobrescribir el trabajo de otro participante.

    Mantenga siempre la disciplina. Su `Pod ID` representa su espacio de trabajo.
---

### 3.1 Credenciales del lab
Todas las credenciales de esta sesión han sido preconfiguradas por los proctors.<br>

Por favor, utiliza la siguiente opción para obtener tus credenciales: <br>

  **Archivo de credenciales**  
  En el **escritorio** de la máquina del lab, abra el archivo: **`LABCOL-1217_Credenciales_PODXXX.txt`**.


| Rol | Usuario | Password |
|---|---|---|
| Administrador | `wxcclabs+admin_IDXXX@gmail.com` | Disponible en el archivo LABCOL-1217_Credenciales_PODXXX.txt |
| Agente | `wxcclabs+agent_IDXXX@gmail.com` | Disponible en el archivo LABCOL-1217_Credenciales_PODXXX.txt |
| Supervisor | `wxcclabs+supvr_XXX@gmail.com` | Disponible en el archivo LABCOL-1217_Credenciales_PODXXX.txt |

#### El archivo de credenciales también incluye:
- 🪪 Su **Pod ID**
- 📞 Su **PSTN Channel Number**

---

### 3.2 Realizar llamadas de prueba - Configuración de Webex App
#### Si puede realizar llamadas PSTN de EE. UU. desde su teléfono móvil, omita esta sección
Si no puede realizar llamadas de prueba desde su teléfono móvil, puede utilizar la **Webex App** instalada en la máquina del lab.
<br>

1. En el **escritorio**, localice y abra la **Webex App** 
2. Inicie sesión utilizando las credenciales de **Supervisor** del archivo `LABCOL-1217_Credenciales_PODXXX.txt`.
3. En el panel izquierdo, seleccione el menu de **Calling** .
4. Marque el **número PSTN** asignado a su Pod para realizar una llamada de prueba al lab.

???- info "Mira cómo hacerlo"
    <figure markdown>
      ![Webex App](./assets/WebexApp.gif){ loading=lazy style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);" }
      <figcaption>Webex App para llamadas a PSTN en USA</figcaption>
    </figure>

!!! tip "Audífonos disponibles"
    En su estación de trabajo encontrará audífonos con cable. Puede utilizarlos para realizar llamadas desde la **Webex App** durante las pruebas del **Bonus**.
    🎧 **¡Guárdalos, son tuyos para llevártelos a casa!**


### 3.3 Enlaces rápidos del lab

Guarde estos enlaces. Los utilizará durante las actividades:

| Herramienta | URL |
|---|---|
| **Collaboration Control Hub** | [admin.webex.com](https://admin.webex.com) |
| **Agent / Supervisor Desktop** | [desktop.wxcc-us1.cisco.com](https://desktop.wxcc-us1.cisco.com/?ciClusterId=P0A1) |

Para acceder a AI Agent Studio, ingrese a Control Hub y utilice la sección de servicios o los enlaces disponibles en el tenant.

## 4 Entorno del lab — Componentes preconfigurados

Para aprovechar mejor el tiempo disponible, los siguientes componentes ya fueron configurados por los proctors. **No es necesario crearlos nuevamente**.

| Componente | Detalles |
|---|---|
| **Site** | Un site creado previamente para el ambiente del lab |
| **Cisco PSTN** | Aplicado al ambiente del lab |
| **Teams & Queues** | Creados previamente para cada Pod |
| **Desktop Profile & Layout** | Preconfigurados para el ambiente del lab |
| **Webex Connect Services** | Preprovisionados para cada Pod |
| **Users & Licenses** | Usuarios `Agent` y `Supervisor` con las licencias de Contact Center correspondientes |
| **Multimedia Profile** | Preconfigurado para el ambiente del lab |
| **Wrap-up & Idle Codes** | Preconfigurados para el ambiente del lab |
| **AI Assistant Features** | Resúmenes generados, análisis de sentimiento y transcripción en tiempo real habilitados |
| **MCP Server y MCP actions** | Preconfigurados e integrados con la organización de Webex del ambiente del laboratorio |

!!! note "Recursos específicos del lab"

    Dependiendo del lab, algunos recursos adicionales, como `flows`, `knowledge bases`, configuraciones de Webex Connect y otros componentes, pueden haber sido preconfigurados para cada caso de uso.
    Estos recursos se explican en detalle en la sección correspondiente de cada lab.

---

## 5 Acerca de MCP (Model Context Protocol)

**MCP (Model Context Protocol)** es un estándar abierto que amplía las capacidades de los AI Agents. MCP proporciona un protocolo consistente para que los AI Agents soliciten contexto, invoquen herramientas y actúen sobre sistemas externos.

El protocolo incluye una capa de descubrimiento que permite enumerar las herramientas, capacidades y metadatos disponibles, eliminando la necesidad de buscar manualmente diferentes APIs.

Al agrupar tareas de varios pasos en una sola llamada a una herramienta, MCP ayuda a reducir la latencia, disminuir errores y acelerar los flujos de trabajo.

Nuestro **MCP Server** ya fue configurado y habilitado para utilizarse en nuestro tenant de **Webex Contact Center**. También está integrado con la **organización de Webex** utilizada en el ambiente del laboratorio.

Puede consultar la documentación completa sobre MCP Server y la solución de Webex en la siguiente página:

[Webex MCP Server Overview](https://developer.webex.com/mcp/docs/webex-mcp-server-overview)


*Lab realizado para Cisco Connect Latam 2026*