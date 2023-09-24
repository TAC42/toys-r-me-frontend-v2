
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ToyList } from '../cmps/ToyList'
import { ToyFilter } from '../cmps/ToyFilter'
import { loadToys, removeToy } from '../store/actions/toy.action'
import { toyService } from '../services/toy.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { ToySort } from '../cmps/ToySort'

export function ToyIndex() {
    const toys = useSelector((state) => state.toyModule.toys)

    const [filterBy, setFilterBy] = useState(toyService.getDefaultFilterBy())
    const [sort, setSort] = useState(toyService.getDefaultSort())

    useEffect(() => {
        loadToys(filterBy, sort)
            .then(() => {
                console.log('Loaded successfully')
            })
            .catch((err) => {
                showErrorMsg('Oops.. something went wrong, try again')
            })
    }, [filterBy, sort])

    function onRemoveToy(toyId) {
        removeToy(toyId)
            .then(() => {
                showSuccessMsg('Toy removed successfully')
            })
            .catch(err => {
                showErrorMsg('Cant remove toy, try again.')
            })
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        if (target.type === 'checkbox') value = target.checked
        if (target.type === 'select-multiple') value = Array.from(target.selectedOptions, (option) => option.value)
        setFilterBy({ ...filterBy, [field]: value })
    }

    function onSetSort(sort) {
        setSort(sort)
    }

    if (!toys) return <div>Loading...</div>
    return (
        <div className="toy-app">
            <section className="main-control-container">
                <NavLink to="/toy/edit" className="btn-add">Add Toy</NavLink>

                <ToyFilter filterBy={filterBy} handleChange={handleChange} />
                <ToySort sort={sort} onSetSort={onSetSort} />
            </section>

            <ToyList toys={toys} onRemove={onRemoveToy} />
        </div>
    )
}



