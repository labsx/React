import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

export const Route = createFileRoute('/')({
    component: Index,
});

function Index() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Open Modal
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Modal Title</DialogTitle>
                <DialogContent>
                    This is your modal content.
                </DialogContent>
            </Dialog>
        </div>
    );
}
