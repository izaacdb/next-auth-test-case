import {signIn, signOut, useSession} from 'next-auth/client'

export default function Test() {
	const [session] = useSession()

	return (
		<>
			<h2>prisma location test</h2>
			{!session && (
				<div>
					Not signed in <br />
					<button onClick={() => signIn()}>Sign in</button>
				</div>
			)}
			{session && (
				<div>
					Signed in as {session?.user?.email} <br />
					<button onClick={() => signOut()}>Sign out</button>
				</div>
			)}
		</>
	)
}
