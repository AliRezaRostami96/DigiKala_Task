import React from 'react';
import { CommentContainerProps } from '../setting';

const CommentContainerComponent: React.FC<CommentContainerProps> = ({ comments }: CommentContainerProps) => {

    return (
        <div>
            {
                comments.map((item, index) => (
                    <div key={`comment_${index}`}>
                        {item.body}
                    </div>
                )) 
            }
        </div>
    )

}

export default CommentContainerComponent;