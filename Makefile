setup:
	bin/setup

server:
	bin/rails server

test:
	rspec

schedule:
	bundle exec whenever

stop_schedule:
	bundle exec whenever -c

.PHONY: test
