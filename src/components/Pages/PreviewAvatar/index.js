import { useState, useEffect } from "react";

export default function PreviewAvatar() {
  const [avatar, setAvatar] = useState();

  // reboot memory if select another file
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
 
    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handlePreviewAvatar}
        style={{ width: "100%" }}
      />

      {avatar && <img src={avatar.preview} alt="" width="10%" />}
    </div>
  );
}
