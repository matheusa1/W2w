 function getErrorMessages(ex){
  const erros = ex?.response?.data?.message;
  if(typeof erros === 'string') return [erros];
  
  return erros
}
export default getErrorMessages;