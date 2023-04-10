import React, { useState } from 'react'
import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Worker } from '@react-pdf-viewer/core'

const CContractePJ = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  const [pdfFile, setPdfFile] = useState(null)
  const [pdfFileError, setPdfFileError] = useState('')

  const [viewPdf, setViewPdf] = useState(null)

  const fileType = ['application/pdf']
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onloadend = (e) => {
          setPdfFile(e.target.result)
          setPdfFileError('')
        }
      } else {
        setPdfFile(null)
        setPdfFileError('Please select valid pdf file')
      }
    } else {
      console.log('select your file')
    }
  }

  const handlePdfFileSubmit = (e) => {
    e.preventDefault()
    if (pdfFile !== null) {
      setViewPdf(pdfFile)
    } else {
      setViewPdf(null)
    }
  }

  return (
    <div>
      <div>
        <p className='flex justify-center text-4xl font-bold my-5'>Contracte</p>
      </div>
      <div className='container'>
        <br></br>

        <form className='flex flex-col' onSubmit={handlePdfFileSubmit}>
          <input
            type='file'
            className='border-2 border-black mx-20'
            required
            onChange={handlePdfFileChange}
          />
          {pdfFileError && <div className='error-msg'>{pdfFileError}</div>}
          <br></br>
          <button
            type='submit'
            className='border border-gray max-w-xs mx-20 bg-green-500 h-9'
          >
            ÎNCARCĂ CONTRACTUL
          </button>
        </form>
        <br></br>
        <h4 className='mx-20 text-xl'>Vizualizare PDF</h4>
        <div className='mx-20 border bg-gray-100 max-w-full pb-96'>
          {viewPdf && (
            <>
              <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js'>
                <Viewer
                  fileUrl={viewPdf}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          )}

          {!viewPdf && (
            <div className='flex justify-center pt-80'>
              No pdf file selected
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default CContractePJ
