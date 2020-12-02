import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

export const data = [
    { id: 1, name: 'George', animal: 'Monkey' },
    { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
    { id: 3, name: 'Alice', animal: 'Giraffe' },
    { id: 4, name: 'Alice', animal: 'Tiger' }
]
const columns = [
    { dataField: 'id', text: 'Id' },
    { dataField: 'name', text: 'Name' },
    { dataField: 'animal', text: 'Animal' },
]
const ProjectBootStrapDemo = () => {
    return (
        <div>
            <BootstrapTable keyField='id' data={data} columns={columns} />
        </div>
    )
}

export default ProjectBootStrapDemo;
