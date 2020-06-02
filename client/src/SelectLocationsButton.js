import React, { Fragment, useState } from 'react';
import {
    Button,
    Confirm,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
} from 'react-admin';

const SelectLocationsButton = ({ selectedIds }) => {
    const [open, setOpen] = useState(false);
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();
    // const [updateMany, { loading }] = useUpdateMany(
    //     'samples',
    //     selectedIds,
    //     { ss_id: -1 },
    //     {
    //         onSuccess: () => {
    //             refresh();
    //             notify('Samples updated');
    //             unselectAll('samples');
    //         },
    //         onFailure: error => notify('Error', 'warning'),
    //     }
    // );
    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    const handleConfirm = () => {
        updateMany();
        setOpen(false);
    };

    return (
        <Fragment>
            <Button label="Select Locations" onClick={handleClick} />
            <Confirm
                isOpen={open}
                loading={loading}
                title="Select Locations"
                content="Are you sure these are the locations you want?"
                onConfirm={handleConfirm}
                onClose={handleDialogClose}
            />
        </Fragment>
    );
}

export default SelectLocationsButton;
