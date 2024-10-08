import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import * as React from "react";

export interface DropZoneProps {
  updateFiles: (incommingFiles: ExtFile[]) => Promise<void>;
  removeFile: (id: string | number | undefined) => void;
  files?: ExtFile[] | undefined;
}

export const BasicDemoDropzone: React.FC<DropZoneProps> = ({ updateFiles, removeFile, files }) => {
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      className="mb-5"
      accept=".webp,.png,.jpg,.jpeg,.avif"
      maxFiles={1}
    >
      {files && files.map((file:ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
      ))}
    </Dropzone>
  );
}