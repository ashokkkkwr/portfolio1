import { getTempFolderPath, getUploadFolderPath } from './path.utils'
import fs from 'fs'
import path from 'path'

/**
 * Transfers an image file from the upload folder to the temporary folder.
 *
 * @param id - The ID of the image.
 * @param name - The name of the image file.
 * @param type - The type of the image (e.g., "jpg", "png").
 */
export const transferImageFromUploadTOTempFolder = (id: string, name: string, type: string): void => {
  const UPLOAD_FOLDER_PATH = path.join(getUploadFolderPath(), type.toLowerCase(), id.toString())
  const TEMP_FOLDER_PATH = path.join(getTempFolderPath(), name)
  if (!fs.existsSync(TEMP_FOLDER_PATH)) fs.mkdirSync(TEMP_FOLDER_PATH, { recursive: true })
  const imageName = path.basename(name)
  try {
    fs.renameSync(path.join(UPLOAD_FOLDER_PATH, imageName), path.join(TEMP_FOLDER_PATH, imageName))
  } catch (err) {
    console.log('🚀 ~ transferImageFromUploadTOTempFolder ~ err', err)
  }
}
