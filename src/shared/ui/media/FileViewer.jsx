import React, { lazy } from "react";
import Modal from "@/shared/ui/modal/Modal";
import { DocViewerRenderers } from "@iamjariwala/react-doc-viewer";
const DocViewer = lazy(() => import("@iamjariwala/react-doc-viewer"));
import "@iamjariwala/react-doc-viewer/dist/index.css";
import { env } from "@/shared/lib/Config";

const FileViewer = ({ file, onClose }) => {
  return (
    <Modal
      title={"Preview Dokumen"}
      isOpen={file}
      onClose={onClose}
      maxWidth="max-w-[100%] sm:max-w-[70%]"
    >
      <div className=" h-[85vh] overflow-hidden border border-gray-200 rounded-lg">
        <DocViewer
          documents={[
            {
              uri: env.FILE_URL + file,
            },
          ]}
          config={{
            pdfZoom: {
              defaultZoom: 0.7,
            },
            print: { enablePrint: true },
            fullscreen: { enableFullscreen: true },
            loadingProgress: { enableProgressBar: true },
            pdfVerticalScrollByDefault: true,
            textSelection: { enableTextSelection: true },
            keyboard: { enableKeyboardShortcuts: true },
            password: { enablePasswordPrompt: true },
            search: { enableSearch: true },
            thumbnail: {
              enableThumbnails: true,
              thumbnailWidth: 120,
              sidebarDefaultOpen: true,
            },
            header: {
              disableFileName: true,
            },
          }}
          pluginRenderers={DocViewerRenderers}
        />
      </div>
    </Modal>
  );
};

export default FileViewer;
