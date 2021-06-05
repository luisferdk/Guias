# Debian Guia

## Agregar usuario administrador

```bash
su
nano /etc/sudoers
# debajo de root
miusuario ALL=(ALL:ALL) ALL
```

## Agregar shortcut

```
xfce4-terminal = ctrl + Alt + T
```

## Editar repositorios

```bash
nano /etc/apt/source.list
# Eliminar los de CDROM
```

## Actualizar

```bash
sudo apt-get update
sudo apt-get install open-vm-tools
```

## Actualizar GRUB

```bash
sudo nano /etc/default/grub
  GRUB_CMDLINE_LINUX_DEFAULT="quiet-splash"
  GRUB_GFXMODE=1920x1080

sudo update-grub
sudo reboot
```

## Actualizar Sistema

```bash
sudo apt-get upgrade
```

## Instalar Programas

```bash
sudo apt-get install vlc
sudo apt-get install plank
```

## Instalar Temas

```bash
#Copiar los temas con su
Copiar los temas /usr/share/themes
Copiar los iconos a .icons
```
