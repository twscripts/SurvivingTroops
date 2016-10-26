father(anton,bart).
father(anton,maarten).
father(anton,elisa).
father(fabian,anton).

mother(celine,bart).
mother(celine,daan).
mother(celine,gerda).
mother(gerda,hendrik).

/* X \== Y: kan X een andere waarde krijgen dan Y? */
sibling(X,Y) :- 
    father(F,X),
    father(F,Y),
    mother(M,X),
    mother(M,Y),
    X \== Y.

/* Part 2 */
a.
b.
c.

edge(a,b).
edge(c,b).

isConnected(A,B) :-
    edge(A,B) ; edge(B,A).

edge(a,c).
edge(c,d).

mother(celine, gerda).
mother(gerde, anton).
