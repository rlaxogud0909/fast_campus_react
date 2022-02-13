import React, { useState } from "react";
import { AlertDialog, Button } from "react-onsenui";

export default function AlertExample() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>open</Button>
            <AlertDialog
                isOpen={isOpen}
                onCancel={() => setIsOpen(false)}
                cancelabel
            >
                <div className="alert-dialog-title">Warning</div>
                <div className="alert-dialog-title">Error</div>
                <div className="alert-dialog-title">
                    <Button
                        className="alert-dialog-button"
                        onClick={() => setIsOpen(false)}
                    >
                        cancel
                    </Button>
                    <Button
                        className="alert-dialog-button"
                        onClick={() => setIsOpen(false)}
                    >
                        Ok
                    </Button>
                </div>
            </AlertDialog>
        </div>
    );
}
