# next-auth-test-case

Test case for prisma location issue

1. Run `yarn install` in `root`, `./server` and `./frontend`.

2. Go to `./server` and run `prisma generate`. This creates the prisma output in `./shared`.

3. Go to `./frontend` and run `yarn dev`. Click login. 

I get the error: 
````
thread 'main' panicked at 'Could not open datamodel file ".../test-case/frontend/.next/server/pages/api/auth/schema.prisma"', query-engine/query-engine/src/opt.rs:196:53
````

If you copy the prisma.schema to that location it works.
