export const firstLetter = (str: string) => {
  const letter = (char = 0) => str.charAt(char).toUpperCase()
  if (
    !letter().match(
      /^\wÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð$/
    ) &&
    !letter().match(/[a-z]/i)
  )
    return letter(1)

  return letter()
}
