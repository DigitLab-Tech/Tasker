import React from "react"

class Table extends React.Component{
    constructor(props){
        super(props);
    }

    excerpt(text, length = 50){
        if(text.length <= length){
            return text;
        }

        return text.substring(0, length - 3) + '...';
    }

    render(){
        return (
            <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">{this.props.title}</h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                    </div>
                  </div>
                </div>
            
                <div className="block w-full overflow-x-auto">
                  <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                        <tr>
                            {Object.getOwnPropertyNames(this.props.data[0]).map(propName => {
                                return(
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        {propName}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
            
                    <tbody>
                    {this.props.data.map(rowData => {
                        return(
                            <tr>
                                {Object.getOwnPropertyNames(rowData).map(propName => {
                                    return(
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{this.excerpt(rowData[propName])}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </section>
        );
    }
}

export default Table