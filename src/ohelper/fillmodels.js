const fillModels = (object, fill = {
  last_name: "",
  celphone: "",
  address: "",
  city: "",
  state: ""
}) => {
  return {
    ...fill,
    ...object,
  }
}

export default fillModels