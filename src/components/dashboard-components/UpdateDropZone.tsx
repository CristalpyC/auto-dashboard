import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import * as React from "react";

interface DropZoneProps {
  updateFiles: (incommingFiles: ExtFile[]) => Promise<void>;
  removeFile: (id: string | number | undefined) => void;
  files: any;
}

export const UpdateDropZone: React.FC<DropZoneProps> = ({ updateFiles, removeFile, files }) => {
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      className="mb-5"
      accept=".webp,.png,.jpg,.jpeg,.avif"
      maxFiles={1}
    >
    </Dropzone>
  );
}