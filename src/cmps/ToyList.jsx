import React from 'react'
import { ToyPreview } from './ToyPreview'

export function ToyList({ toys, onRemove }) {
    return (
        <div className="toy-list">
            {
                toys.map(toy => <ToyPreview toy={toy} key={toy._id} onRemove={onRemove} />)
            }
        </div>
    )
}
