// From the defaultExport.jsx file
import DefaultExport from "./components/defaultExport"

// From the namedExport.jsx file
import {NamedExport1,NamedExport2} from "./components/namedExport"

// From the mixedExport.jsx file
import { Mixed1 } from "./components/mixedExport"
import Mixed2 from "./components/mixedExport"


const ImportedFile=()=>{
  return (
    <>
    <DefaultExport />
    <hr />
    <NamedExport1 />
    <NamedExport2 />
    <hr />
    <Mixed1 />
    <Mixed2 />
    </>
  )
}

export default ImportedFile