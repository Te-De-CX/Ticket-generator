import React, { useCallback, useState } from 'react';
import { FaImage } from 'react-icons/fa';

interface ImageInputProps {
    onImageChange: (imageSrc: string | null) => void; // Callback to notify parent of image changes
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageChange }) => {
    const [image, setImage] = useState<string | null>(null);
    const [dragOver, setDragOver] = useState<boolean>(false);

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(false);

        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target && e.target.result) {
                    const imageSrc = e.target.result as string;
                    setImage(imageSrc);
                    onImageChange(imageSrc); // Notify parent of the new image
                }
            };
            reader.readAsDataURL(file);
        }
    }, [onImageChange]);

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(true);
    }, []);

    const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(false);
    }, []);

    const handleFileInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target && e.target.result) {
                    const imageSrc = e.target.result as string;
                    setImage(imageSrc);
                    onImageChange(imageSrc); // Notify parent of the new image
                }
            };
            reader.readAsDataURL(file);
        }
    }, [onImageChange]);

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            style={{
                border: dragOver ? '2px dashed #007bff' : '2px dashed #ccc',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: dragOver ? '#f0f8ff' : '#f9f9f9',
            }}
        >
            {image ? (
                <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            ) : (
                <>
                    <FaImage size={40} color="#007bff" />
                    <p>Drag & drop an image here or click to upload</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInput}
                        style={{ display: 'none' }}
                        id="fileInput"
                    />
                    <label htmlFor="fileInput" style={{ cursor: 'pointer', color: '#007bff' }}>
                        Choose a file
                    </label>
                </>
            )}
        </div>
    );
};

export default ImageInput;