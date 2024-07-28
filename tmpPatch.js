const electron = {
    isFullscreen: () => {
      return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    },
    enterFullscreen: (element = document.documentElement) => {
      if (document.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
      }
    },
    exitFullscreen: () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    },
    ipcRenderer: {
      send: function (channel, data) {
        if (channel == "e_fullScreen") {
          electron.isFullscreen() ? electron.exitFullscreen() : electron.enterFullscreen()
        }
      },
      sendSync: function (channel, data) {
      },
      on: function (channel, callback) {
      }
    }
  }
  window.electron = electron