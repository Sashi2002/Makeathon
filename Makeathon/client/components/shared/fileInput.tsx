import { useState } from "react";
import { TbFileUpload } from "react-icons/tb";
import storageService from "utils/services/storage";

const FileInput = () => {
  const files: File[] = [];
  const [file, setFile] = useState("");

  const addFile = async ({ target }: any) => {
    const inputFiles: File = target.files[0];
    files.push(inputFiles);
    const cid = await storageService(inputFiles);
    console.log(files);
    setFile(`Gateway URL: https://${cid}.ipfs.w3s.link`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full text-3xl">
      <p className="text-5xl md:text-7xl mt-6 md:mt-0"> Blackbox</p>
      <p className="text-2xl md:text-4xl mb-16 mt-3"> Web3-Storage</p>
      {file ? <p className="text-2xl pb-10">{file}</p> : ""}
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center md:w-2/12 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="h-16 w-16">
            <TbFileUpload className="h-full w-full" />
          </div>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Upload Your files
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={addFile}
        />
      </label>
      <p className="text-xl flex flex-col items-center pt-10 md:mt-32 mt-6">
        <div>Made By :</div>
        <div>Ayush Garg</div>
        <div>Harsh Aswani</div>
        <div>Saransh Sinha</div>
        <div>Sarthak Sachdeva</div>
        <div>Sashikanta Mohanty</div>
      </p>
    </div>
  );
};

export default FileInput;
