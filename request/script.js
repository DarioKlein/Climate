import axios from "axios"
import showWarning from "../warning/script"
import responseMenu from "../responseMenu/script"
async function request(url) {
  try {
    const response = await axios.get(url)
    const json = response.data
    showWarning("")
    responseMenu(json)
  } catch (error) {
    showWarning("Cidade não encontrada, digite outra...")
  }
}

export default request
