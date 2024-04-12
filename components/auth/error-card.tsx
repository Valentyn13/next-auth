import { CardWrapper } from './card-wrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

const ErrorCard = () => {
    return(
        <CardWrapper
            headerLabel='Oops! Something went wrong'
            backButtonHref='/auth/login'
            backButtonLabel='Back to login'
        >
            <div className='w-full flex justify-center'>
                <ExclamationTriangleIcon className='text-destructive size-5'/>
            </div>
        </CardWrapper>
    )
}

export {ErrorCard}