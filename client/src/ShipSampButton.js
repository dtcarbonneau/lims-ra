import React, { Fragment, useState } from 'react';
import {
    Button,
    Confirm,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
} from 'react-admin';

const ShipSamplesButton = ({ selectedIds }) => {
    const [open, setOpen] = useState(false);
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();
    const [updateMany, { loading }] = useUpdateMany(
        'samples',
        selectedIds,
        { ss_id: -1 },
        {
            onSuccess: () => {
                refresh();
                notify('Samples updated');
                unselectAll('samples');
            },
            onFailure: error => notify('Error: samples not updated', 'warning'),
        }
    );
    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    const handleConfirm = () => {
        updateMany();
        setOpen(false);
    };

    return (
        <Fragment>
            <Button label="Ship Samples" onClick={handleClick} />
            <Confirm
                isOpen={open}
                loading={loading}
                title="Ship Samples"
                content="Are you sure you want to Ship These Samples?"
                onConfirm={handleConfirm}
                onClose={handleDialogClose}
            />
        </Fragment>
    );
}

export default ShipSamplesButton;