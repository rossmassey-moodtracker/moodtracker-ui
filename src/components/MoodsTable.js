/**
 * Component: MoodsTable
 *
 * Displays the moods in a material ui table
 */
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from '@mui/material';

function formatTime(dateString) {
    const options = {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function MoodsTable({ moods, newMood, onMoodChange, onMoodSubmit }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date and Time</TableCell>
                        <TableCell align="right">Mood</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {moods.map((mood) => (
                        <TableRow key={mood.id}>
                            <TableCell component="th" scope="row">
                                {formatTime(mood.time)}
                            </TableCell>
                            <TableCell align="right">{mood.mood}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell>
                            <TextField
                                label="New Mood"
                                variant="outlined"
                                value={newMood}
                                onChange={onMoodChange}
                                fullWidth
                            />
                        </TableCell>
                        <TableCell align="right">
                            <Button variant="contained" color="primary" onClick={onMoodSubmit}>
                                Log Mood
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MoodsTable;
