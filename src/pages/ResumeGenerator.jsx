import React from 'react'
import { Link } from 'react-router-dom'
import { IoDocumentText} from "react-icons/io5";
import { IoMdCloudDownload } from "react-icons/io";


function ResumeGenerator() {
  return (
    <div className="bg-white flex flex-col items-center min-h-screen px-6 mt-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-20 text-center">
        Create a Job-Winning Resume in Minutes
      </h1>

      {/* Two-step grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
        {/* Step 1 */}
        <div className="bg-white shadow-md rounded-xl p-8 border text-center hover:shadow-lg transition">
          <div className="text-blue-500 text-4xl mb-3 flex justify-center items-center"><IoDocumentText /></div>
          <h2 className="text-xl font-semibold mb-2">Add your Information</h2>
          <p className="text-gray-600 mb-2">
            Add pre-written examples to each section
          </p>
          <p className="font-medium text-gray-800">Step 1</p>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow-md rounded-xl p-8 border text-center hover:shadow-lg transition ">
          <div className="text-red-500 text-4xl mb-3 flex justify-center items-center"><IoMdCloudDownload /></div>
          <h2 className="text-xl font-semibold mb-2">Download your Resume</h2>
          <p className="text-gray-600 mb-2">
            Download and start applying
          </p>
          <p className="font-medium text-gray-800">Step 2</p>
        </div>
      </div>

      <Link to='/form' className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md transition"> LET&apos;S START</Link>
    </div>

  )
}

export default ResumeGenerator