import removeBackground from "@imgly/background-removal";

window.removeWithImgly = async function (file, onProgress) {
  return await removeBackground(file, {
    device: "cpu",
    model: "isnet_quint8",
    output: {
      format: "image/png",
      quality: 0.95,
      type: "foreground"
    },
    progress: (key, current, total) => {
      if (total > 0 && onProgress) {
        onProgress(key, Math.round((current / total) * 100));
      }
    }
  });
};
