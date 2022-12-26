const db = require('../config/db');

const getMahasiswa = () => {
    const SQLQuery = 'SELECT * FROM table_mahasiswa';

    return db.execute(SQLQuery);
}
const createMahasiswa = (body) => {
    const SQLQuery = `  INSERT INTO table_mahasiswa (nim, name, address, hobby) 
                        VALUES ('${body.nim}', '${body.name}', '${body.address}', '${body.hobby}')`;

    return db.execute(SQLQuery);
}
const updateMahasiswa = (body, idmahasiswa) => {
    const SQLQuery = `  UPDATE table_mahasiswa
                        SET nim='${body.nim}', name='${body.name}', address='${body.address}' , hobby='${body.hobby}'
                        WHERE id=${idmahasiswa}`;

    return db.execute(SQLQuery);
}

const deleteMahasiswa= (idmahasiswa) => {
    const SQLQuery = `DELETE FROM table_mahasiswa WHERE id=${idmahasiswa}`;

    return db.execute(SQLQuery);
}

module.exports ={
getMahasiswa,
createMahasiswa,
updateMahasiswa, 
deleteMahasiswa
};