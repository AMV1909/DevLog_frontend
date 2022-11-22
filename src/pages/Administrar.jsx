import React, { useState } from 'react'
import { useEffect } from 'react'
import { Navbar } from '../componentes/Navbar'
import { getProductsSellerRequest, getProductsAdminRequest, createProductRequest, updateProductRequest, deleteProductRequest } from '../api/products'
import { getUserInfoRequest } from '../api/users'

export const Administrar = () => {
    const [action, setAction] = useState('');
    const [productos, setProductos] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        shortDescription: "",
        description: "",
        price: "",
        stock: "",
        image: null
    })
    const [loading, setLoading] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)

    useEffect(() => {
        getUserInfoRequest().then((response) => {
            switch (response.type) {
                case 'admin':
                    getProductsAdminRequest().then((response) => {
                        setProductos(response)
                    })
                    break;
                case 'vendedor':
                    getProductsSellerRequest().then((response) => {
                        setProductos(response)
                    })
                    break;
                default:
                    break;
            }
        }).catch((error) => {
            window.location.href = '/login';
        });
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        switch (action) {
            case 'Añadir':
                handleCreate();
                break;
            case 'Actualizar':
                handleUpdate();
                break;
            default:
                break;
        }
    }

    const handleCreate = async () => {
        setLoading(true)

        await createProductRequest(formData)
            .then(() => {
                window.location.href = "/administrar"
            })
            .catch((err) => {
                console.log(err)
            })

        setLoading(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (e.target.files) {
            setFormData({ ...formData, image: e.target.files[0] })
        }
    }

    const handleUpdate = async () => {
        setLoading(true)

        await updateProductRequest(formData.id, formData)
            .then(() => {
                window.location.href = "/administrar"
            })
            .catch((err) => {
                console.log(err)
            })

        setLoading(false)
    }

    const handleDelete = async (id) => {
        if (confirm('¿Estás seguro de eliminar este producto?')) {
            setLoadingDelete(true)

            await deleteProductRequest(id)
                .then(() => {
                    window.location.href = "/administrar"
                })
                .catch((err) => {
                    console.log(err)
                })

            setLoadingDelete(false)
        }
    }

    const setProductData = (product) => {
        setFormData({
            id: product._id,
            name: product.name,
            shortDescription: product.shortDescription,
            description: product.description,
            price: product.price,
            stock: product.stock,
            image: null
        })

        setAction('Actualizar')
    }

    const clearForm = () => {
        setFormData({
            name: "",
            shortDescription: "",
            description: "",
            price: "",
            stock: "",
            image: null
        })
    }

    return (
        <>
            <Navbar />




            <div>

                <button type="button" class="btn btn-success btnAgregar" data-bs-toggle="modal" data-bs-target="#agregar" onClick={() => setAction('Añadir')}>
                    Agregar Producto
                </button>


                <div class="modal fade" id="agregar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => clearForm()}></button>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputEmail1" class="form-label">Nombre Producto</label>
                                        <input name="name" type="Numero" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={formData.name} onChange={handleChange} required />
                                        <div class="invalid-feedback">
                                            Valor Obligatorio
                                        </div>
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="detallescorto" class="form-label">Descripcion corta</label>
                                        <textarea name="shortDescription" class="form-control" defaultValue={formData.shortDescription} onChange={handleChange} required></textarea>
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="detalles" class="form-label">Descripcion</label>
                                        <textarea name='description' class="form-control" defaultValue={formData.description} onChange={handleChange} required></textarea>
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="CantidadProduct" class="form-label" >Precio</label>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">$</span>
                                            <input name='price' type="number" class="form-control" defaultValue={formData.price} onChange={handleChange} required />

                                        </div>

                                    </div>



                                    <div class="mb-3">
                                        <label for="startDate">Cantidad:</label>
                                        <div className='cantidadProd' >
                                            <input name='stock' type="number" className='cantidadProd' id="CantProd" min="0" defaultValue={formData.stock} onChange={handleChange} required />
                                        </div>
                                        <div id="emailHelp" class="form-text">Tambien puedes utilizar el scroll para elegir la cantidad</div>
                                    </div>



                                    <div class="mb-3">
                                        <label htmlFor="ImagenProd">Imagen del Producto</label>
                                        <input name='image' class="form-control" type="file" id="ImagenProd" defaultValue={formData.image} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => clearForm()}>Salir</button>
                                    <button type="submit" className='btn btn-primary'>
                                        {loading ? (
                                            <div className="spinner-border text-dark" role="status">
                                                <span className="sr-only"></span>
                                            </div>
                                        ) : action}
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container tableConteiner">


                <table className='table table-hover tableProductos'>

                    <thead className='table-dark'>
                        <tr>
                            <th className='text-center'>Nombre</th>
                            <th className='text-center'>Precio</th>
                            <th className='text-center'>Cantidad</th>
                            <th className='text-center'>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {productos.length > 0 ? (
                            productos.map((producto) => (
                                <tr key={producto._id}>
                                    <td className='text-center'>{producto.name}</td>
                                    <td className='text-center'>$ {producto.price}</td>
                                    <td className='text-center'>{producto.stock}</td>
                                    <td className='d-flex justify-content-around'>
                                        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#agregar" onClick={() => {
                                            setProductData(producto)
                                        }}>Editar</button>
                                        <button className='btn btn-danger' onClick={() => handleDelete(producto._id)}>
                                            {loadingDelete ? (
                                                <div className="spinner-border text-dark" role="status">
                                                    <span className="sr-only"></span>
                                                </div>
                                            ) : 'Eliminar'}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan='4' className='text-center p-2'>No hay productos</td>
                            </tr>
                        )}
                    </tbody>
                </table>



            </div>

        </>
    )
}
