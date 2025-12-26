import React, { useState } from 'react';
import { Input, Card, Button, Icon, Modal, Header as SemanticHeader } from 'semantic-ui-react';
import './SOPDashboard.css';



const SOPDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sops, setSops] = useState(() => {
        const savedSops = localStorage.getItem('sops');
        return savedSops ? JSON.parse(savedSops) : [];
    });
    const [openUpload, setOpenUpload] = useState(false);


    React.useEffect(() => {
        localStorage.setItem('sops', JSON.stringify(sops));
    }, [sops]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredSOPs = sops.filter(sop =>
        sop.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleFileUpload = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];

            // Limit file size to ~2MB to avoid localStorage quota issues
            if (file.size > 2 * 1024 * 1024) {
                alert("File is too large to save locally. Please choose a file under 2MB.");
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                const newSOP = {
                    id: Date.now(),
                    title: file.name,
                    description: 'Uploaded directly from local device.',
                    type: file.name.endsWith('.pdf') ? 'pdf' : 'doc',
                    date: new Date().toISOString().split('T')[0],
                    fileContent: event.target.result // Base64 string
                };
                setSops(prev => [...prev, newSOP]);
                setOpenUpload(false);
                alert(`File selected: ${file.name}`);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this SOP?")) {
            setSops(prev => prev.filter(sop => sop.id !== id));
        }
    };

    const handleView = (sop) => {
        if (sop.fileContent) {
            const newWindow = window.open();
            if (newWindow) {
                newWindow.document.write(
                    `<iframe src="${sop.fileContent}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`
                );
            } else {
                alert("Please allow popups to view the file.");
            }
        } else {
            alert("No file content available for this SOP.");
        }
    };



    return (
        <div className="dashboard_container" data-aos="fade-up">
            <div className="controls_bar">
                <Input
                    icon='search'
                    placeholder='Search SOPs...'
                    className="search_bar"
                    value={searchTerm}
                    onChange={handleSearch}
                    size="large"
                />
                <Button color='orange' icon labelPosition='left' onClick={() => setOpenUpload(true)} className="add_btn">
                    <Icon name='add' />
                    Add SOP
                </Button>
            </div>

            <div className="sop_grid">
                {filteredSOPs.map((sop, index) => (
                    <Card key={sop.id} className="sop_card" data-aos="zoom-in" data-aos-delay={index * 100}>
                        <Card.Content>
                            <Card.Header>{sop.title}</Card.Header>
                            <Card.Meta>
                                <Icon name={sop.type === 'doc' ? 'file word outline' : sop.type === 'pdf' ? 'file pdf outline' : 'file alternate outline'} />
                                {sop.date}
                            </Card.Meta>
                            <Card.Description>
                                {sop.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='card_actions'>
                                <Button basic color='blue' className="action_btn" onClick={() => handleView(sop)}>
                                    <Icon name='eye' /> View
                                </Button>
                                <Button basic color='red' className="action_btn" onClick={() => handleDelete(sop.id)}>
                                    <Icon name='trash alternate' /> Delete
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </div>

            <Modal
                onClose={() => setOpenUpload(false)}
                onOpen={() => setOpenUpload(true)}
                open={openUpload}
                size='small'
                className="upload_modal"
            >
                <SemanticHeader icon='cloud upload' content='Upload SOP' />
                <Modal.Content>
                    <p>Choose a method to add your Standard Operating Procedure document.</p>
                    <div className="upload_actions">
                        <div className="file_upload_section">
                            <Button primary as="label" htmlFor="file-upload" className="upload_btn">
                                <Icon name='upload' /> Upload File
                            </Button>
                            <input
                                type="file"
                                id="file-upload"
                                hidden
                                accept=".doc,.docx,.pdf"
                                onChange={handleFileUpload}
                            />
                            <p className="file_types_hint">Supported formats: .doc, .docx, .pdf</p>
                        </div>


                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpenUpload(false)}>
                        Cancel
                    </Button>
                </Modal.Actions>
            </Modal>


        </div>
    );
};

export default SOPDashboard;
