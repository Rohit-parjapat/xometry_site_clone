import React, { useState } from "react";
import classNames from "classnames";
import { GrSend } from "react-icons/gr";

const MyQuotes = () => {
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex justify-between items-center mx-32 py-3 border-b border-gray-300">
          <span className="text-2xl font-bold tracking-wide">My Quotes</span>
          <span className="flex justify-center items-center gap-1 text-blue-700 text-sm font-medium">
            <GrSend className="text-blue-700 text-lg" />
            Ask a question
          </span>
        </div>
        <div className="h-20 my-16">
          <svg
            className="h-[7rem] m-auto"
            width="184"
            height="152"
            viewBox="0 0 184 152"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <g transform="translate(24 31.67)">
                <ellipse
                  className="ant-empty-img-default-ellipse"
                  cx="67.797"
                  cy="106.89"
                  rx="67.797"
                  ry="12.668"
                ></ellipse>
                <path
                  className="part-1"
                  d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                ></path>
                <path
                  className="part-1"
                  d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                  transform="translate(13.56)"
                ></path>
                <path
                  className="part3"
                  d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                ></path>
                <path
                  className="part-4"
                  d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                ></path>
              </g>
              <path
                className="part-5"
                d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
              ></path>
              <g className="part-g" transform="translate(149.65 15.383)">
                <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse>
                <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div
          className={classNames(
            "bg-indigo-50 border-2 border-gray-300 border-dashed rounded-lg px-6 pt-5 pb-6 h-64 mx-32 mb-10 hover:bg-indigo-100 cursor-pointer",
            {
              "border-blue-400": dragging,
            }
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex justify-center">
            <svg
              className="h-16 w-16  text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div className="mt-4 text-sm text-center">
            <div>
              <p className="hover:text-blue-600 text-lg ">
                Drag and drop your Design or{" "}
                <span className="text-blue-600 hover:underline cursor-pointer px-1">
                  Browse
                </span>
              </p>
              <p>You can upload multiple files at once</p>
              <p className="mx-auto text-md text-gray-500 mt-2 w-[39rem] text-center">
                Instant quote: STEP, STP, SLDPRT, STL, SAT, 3DXML, 3MF, PRT,
                IPT, CATPART, X_T, PTC, X_B, DXF Manual quote: DWS, DWF, DWG,
                PDF
              </p>
              <p className="text-lg text-gray-400 py-3">
                All uploads are secure and confidential
              </p>
            </div>
            <p className="mt-1 text-gray-500">
              <span className="text-blue-500 cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileInputChange}
                />
              </span>
            </p>
          </div>
          {selectedFile && (
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">{selectedFile.name}</p>
                <button
                  className="text-red-500 text-sm"
                  onClick={() => setSelectedFile(null)}
                >
                  Remove
                </button>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 pb-4 text-xs flex rounded bg-gray-100">
                  <div
                    style={{ width: "0%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MyQuotes;
