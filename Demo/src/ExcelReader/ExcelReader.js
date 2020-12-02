import React, { Component } from 'react';
import XLSX from 'xlsx';

export const SheetJSFT = [
  "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk",
  "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function (x) { return "." + x; }).join(",");

export const make_cols = refstr => {
  let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i }
  return o;
};

class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: []
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  };

  handleFile() {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
        console.log(JSON.stringify(this.state.data, null, 2));
      });

    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="file">Upload an excel to Process Triggers</label>
        <input type="file" className="form-control" id="file" accept={SheetJSFT} onChange={this.handleChange} />
        <input type='submit' value="Process Triggers" onClick={this.handleFile} />
      </div>
    )
  }
}

export default ExcelReader;

// import React, { useState } from 'react';
// import XLSX from 'xlsx';

// export const SheetJSFT = [
//   "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk",
//   "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
// ].map(function (x) { return "." + x; }).join(",");

// export const make_cols = refstr => {
//   let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
//   for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i }
//   return o;
// };

// function ExcelReader() {

//   const [file, setFile] = useState({})
//   const [data, setData] = useState([])
//   const [cols, setCols] = useState([])

//   const handleChange = (event) => {
//     setFile({
//       ...file,
//       file: event.target.files[0]
//     })
//   }

//   const handleFile = () => {

//     const reader = new FileReader();
//     const rABS = !!reader.readAsBinaryString;

//     reader.onload = (e) => {
//       const bstr = e.target.result;
//       const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
//       const wsname = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       const data = XLSX.utils.sheet_to_json(ws);
//       setFile({ data: data, cols: make_cols(ws['!ref']) },
//         () => {
//           console.log(JSON.stringify(data, null, 2));
//         });
//     };
//     if (rABS) {
//       reader.readAsBinaryString(file);
//     } else {
//       reader.readAsArrayBuffer(file);
//     };
//   }


//   return (
//     <div>
//       <label htmlFor="file">Upload an excel to Process Triggers</label>
//       <input type="file" className="form-control" id="file" accept={SheetJSFT} onChange={handleChange} />
//       <input type='submit' value="Process Triggers" onClick={handleFile} />
//     </div>
//   )
// }

// export default ExcelReader

