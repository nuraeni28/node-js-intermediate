const MahasiswaModel = require('../models/MahasiswaModel');

const getAllMahasiswa = async (req, res) => {
    try {
        const [data] = await MahasiswaModel.getMahasiswa();
    
        res.status(200).json({status:200, message :"Get Mahasiswa success", data :data });

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    };
};

const createNewMahasiswa = async (req, res) => {
    const {body} = req;

    if(!body.nim||!body.name||!body.address||!body.hobby||!body.prodi||!body.jurusan){
        return res.status(400).json({
            message: 'Data harus Lengkap',
            data: null,
        })
    }

    try {
        await MahasiswaModel.createMahasiswa(body);
        res.status(201).json({
            message: 'CREATE new Mahasiswa success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const updateMahasiswa = async (req, res) => {
    const {idmahasiswa} = req.params;
    const {body} = req;
    try {
        await MahasiswaModel.updateMahasiswa(body, idmahasiswa);
        res.status(200).json({
            message: 'UPDATE Mahasiswa success',
            data: {
                id: idmahasiswa,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteMahasiswa = async (req, res) => {
    const {idmahasiswa} = req.params;
    try {
        await MahasiswaModel.deleteMahasiswa(idmahasiswa);
        res.status(200).json({
            message: 'DELETE Mahasiswa success'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
module.exports = {
    getAllMahasiswa,
    createNewMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
};