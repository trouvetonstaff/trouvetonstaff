package logger

type loggerstruct struct {
	level loglevel
}

type loglevel int

const (
	Debug loglevel = 0
	Info
	Warning
	Error
	Panic
)

func (logger *loggerstruct) Init() {

}