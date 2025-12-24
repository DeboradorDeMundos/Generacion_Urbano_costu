# 🔒 SISTEMA DE BLOQUEO DE SITIO

## ⚠️ IMPORTANTE: Configuración requerida

**El sitio DEBE estar en modo `server` para que funcione el bloqueo.**

Ya está configurado en `astro.config.mjs` con `output: "server"`.

---

## Para BLOQUEAR el sitio (cuando no paguen):

### En Vercel:
1. Ve a tu proyecto en Vercel
2. Ve a **Settings** → **Environment Variables**
3. Agrega una nueva variable:
   - **Name:** `SITE_DISABLED`
   - **Value:** `true`
   - **Environments:** ✅ Selecciona **SOLO Production** (o el ambiente que uses)
   - ⚠️ **MUY IMPORTANTE:** NO marques "Automatically expose System Environment Variables"
4. Click en **Save**
5. Ve a **Deployments** → Click en los 3 puntos del último deploy → **Redeploy**
6. **Espera** a que termine el redeploy (1-2 minutos)

### Resultado:
- ✅ TODAS las páginas redirigirán a `/sitio-inhabilitado`
- ✅ Nadie podrá acceder al contenido del sitio
- ✅ Se mostrará mensaje profesional de "Sitio Inhabilitado"

---

## Para DESBLOQUEAR el sitio (cuando paguen):

### En Vercel:
1. Ve a **Settings** → **Environment Variables**
2. **Elimina** la variable `SITE_DISABLED` o cámbiala a `false`
3. Haz un **Redeploy** del proyecto

### Resultado:
- ✅ El sitio volverá a funcionar normalmente
- ✅ Todos podrán acceder a todas las páginas

---

## 🧪 Para probar localmente:

### Bloquear:
```bash
# Windows PowerShell
$env:SITE_DISABLED="true"
npm run dev
```

```bash
# macOS/Linux
SITE_DISABLED=true npm run dev
```

### Desbloquear:
```bash
# Solo ejecuta normalmente
npm run dev
```

---

## 📝 Notas importantes:

- 🎯 **Súper fácil:** Solo cambias UNA variable en Vercel
- ⚡ **Instantáneo:** Toma efecto en el próximo deploy
- 🔄 **Reversible:** Puedes activar/desactivar cuando quieras
- 🛡️ **Seguro:** Sin importar la ruta, nadie puede acceder
- 🎨 **Profesional:** Se ve bien con el logo de Generación Urbano

---

## 🖼️ Logo

La página de inhabilitado busca el logo en:
`/images/logos/generacion-urbano-logo.png`

Si el logo no existe, simplemente no se muestra (sin errores).

---

## 💡 Recomendación:

**Antes de bloquear en producción:**
1. Pruébalo localmente primero
2. Verifica que se vea bien
3. Luego actívalo en Vercel cuando lo necesites
