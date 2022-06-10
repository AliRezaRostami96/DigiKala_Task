import { Card, CardContent, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { CommentContainerProps, Translations } from '../setting';

const CommentContainerComponent: React.FC<CommentContainerProps> = ({ comments }: CommentContainerProps) => {

    return (
        <div>
            <Typography variant='h5' className='fw-bold'>
                {Translations.comments}
            </Typography>
            {comments.map((comment, index) => (
                <Card sx={{ minWidth: 275 }} key={`comment_${index}`} className="mx-4 my-2">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <span>
                                {comment.user_name}
                            </span>
                            <span className='mr-4'>
                                {comment.created_at}
                            </span>
                        </Typography>
                        <Typography variant="body2" className='pt-2 pr-4'>
                            {comment.body}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )

}

export default CommentContainerComponent;