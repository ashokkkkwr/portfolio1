//The overall code defines as asynchronous function called `createUUID`
//that generates a UUID(universally Unique Identifier) and return
// it as string.
//UUID os a 128-bit number used to uniquely indentify information
// in computer systems.

export default async function createUUID(): Promise<string> {
    let dt = new Date().getTime()
    const uuid = 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0
      dt = Math.floor(dt / 16)
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
    return uuid
  }
  