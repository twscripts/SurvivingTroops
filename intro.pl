father(anton,bart).
father(anton,daan).
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

ancestor(X,Y) :- father(X,Y).

ancestor(X,Y) :-
    father(Z,Y),
    ancestor(X,Z).
    

peano_plus(zero,X,X).

peano_plus(s(X),Y,s(Z)) :- peano_plus(X,Y,Z).

min(X,zero,X).

min(s(X),s(Y),Z) :- min(X,Y,Z).

greater_than(s(_),zero).
greater_than(s(X),s(Y)) :- greater_than(X,Y).

maximum(X,X,X).
maximum(X,Y,X) :- greater_than(X,Y).
maximum(X,Y,Y) :- greater_than(Y,X).
