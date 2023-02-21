import { Posts } from "../../components/Posts";
import { CounterProvider } from "../../contexts/CounterProvider";
import { PostsProvider } from "../../contexts/PostsProvider";

export default function App(){
    return(
        <PostsProvider>
            <CounterProvider>
                <Posts />
            </CounterProvider>
        </PostsProvider>
    )
}